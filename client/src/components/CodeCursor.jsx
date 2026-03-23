import React, { useEffect, useRef, useState } from 'react';

const DROP_SYMBOLS = [
  '</>',
  '{ }',
  '[ ]',
  '( )',
  '=>',
  '===',
  '!==',
  '&&',
  '||',
  'const',
  'let',
  'class',
  'async',
  'await',
  'API',
  'JSON',
  'React',
  'Node',
  'SQL',
  'Git',
  'AI',
  'ML'
];

function CodeCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const frameRef = useRef(null);
  const wasDraggingRef = useRef(false);

  const [mode, setMode] = useState('none');
  const [hovering, setHovering] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [drops, setDrops] = useState([]);
  const [touchPings, setTouchPings] = useState([]);

  const emitBurst = (x, y, burstSize = 14) => {
    const now = Date.now();
    const burst = Array.from({ length: burstSize }, (_, index) => {
      const angle = (Math.PI * 2 * index) / burstSize;
      const distance = 30 + Math.random() * 46;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - (18 + Math.random() * 20);

      return {
        id: `${now}-${index}-${Math.random().toString(36).slice(2, 6)}`,
        symbol: DROP_SYMBOLS[Math.floor(Math.random() * DROP_SYMBOLS.length)],
        x,
        y,
        dx,
        dy,
        rot: -20 + Math.random() * 40,
        duration: 900 + Math.random() * 700
      };
    });

    setDrops((prev) => [...prev, ...burst]);

    burst.forEach((item) => {
      window.setTimeout(() => {
        setDrops((prev) => prev.filter((drop) => drop.id !== item.id));
      }, item.duration + 120);
    });
  };

  const emitTouchPing = (x, y) => {
    const id = `touch-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setTouchPings((prev) => [...prev, { id, x, y }]);
    window.setTimeout(() => {
      setTouchPings((prev) => prev.filter((ping) => ping.id !== id));
    }, 520);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const finePointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const coarsePointerMedia = window.matchMedia('(pointer: coarse)');

    const updateMode = () => {
      if (finePointerMedia.matches) {
        setMode('mouse');
        return;
      }

      if (coarsePointerMedia.matches || 'ontouchstart' in window) {
        setMode('touch');
        return;
      }

      setMode('none');
    };

    updateMode();
    finePointerMedia.addEventListener('change', updateMode);
    coarsePointerMedia.addEventListener('change', updateMode);

    return () => {
      finePointerMedia.removeEventListener('change', updateMode);
      coarsePointerMedia.removeEventListener('change', updateMode);
    };
  }, []);

  useEffect(() => {
    if (mode !== 'mouse') return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const follow = { x: target.x, y: target.y };

    const render = () => {
      follow.x += (target.x - follow.x) * 0.16;
      follow.y += (target.y - follow.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${follow.x}px, ${follow.y}px, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(render);
    };

    const handleMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }

      const interactive = event.target.closest('a, button, .btn, [role="button"], input, textarea, select, label');
      setHovering(Boolean(interactive));
    };

    const handleDown = () => {
      setDragging(true);
      wasDraggingRef.current = true;
    };

    const handleUp = (event) => {
      setDragging(false);

      if (!wasDraggingRef.current) return;
      wasDraggingRef.current = false;
      emitBurst(event.clientX, event.clientY, 14);
    };

    frameRef.current = window.requestAnimationFrame(render);
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown, { passive: true });
    window.addEventListener('mouseup', handleUp, { passive: true });

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== 'touch') return;

    const handleTouchStart = (event) => {
      const touch = event.touches && event.touches[0];
      if (!touch) return;

      emitTouchPing(touch.clientX, touch.clientY);
      emitBurst(touch.clientX, touch.clientY, 10);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [mode]);

  if (mode === 'none') return null;

  return (
    <>
      {mode === 'mouse' && (
        <>
          <div
            ref={ringRef}
            className={`code-cursor-ring ${hovering ? 'is-hovering' : ''} ${dragging ? 'is-dragging' : ''}`}
            aria-hidden="true"
          />
          <div
            ref={dotRef}
            className={`code-cursor-dot ${hovering ? 'is-hovering' : ''} ${dragging ? 'is-dragging' : ''}`}
            aria-hidden="true"
          >
            {'</>'}
          </div>
        </>
      )}

      {touchPings.map((ping) => (
        <span
          key={ping.id}
          className="code-touch-ping"
          style={{
            left: `${ping.x}px`,
            top: `${ping.y}px`
          }}
          aria-hidden="true"
        />
      ))}

      {drops.map((drop) => (
        <span
          key={drop.id}
          className="code-drop"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            '--dx': `${drop.dx}px`,
            '--dy': `${drop.dy}px`,
            '--rot': `${drop.rot}deg`,
            '--dur': `${drop.duration}ms`
          }}
          aria-hidden="true"
        >
          {drop.symbol}
        </span>
      ))}
    </>
  );
}

export default CodeCursor;
