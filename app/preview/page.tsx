export default function PreviewPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 48,
        padding: '40px 24px',
        flexWrap: 'wrap',
      }}
    >
      {/* iPhone 15 Pro — 393×852 logical px */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <span style={{ color: '#666', fontSize: 12, fontFamily: 'sans-serif', letterSpacing: 1 }}>
          iPhone 15 Pro · 393×852
        </span>
        <div
          style={{
            width: 296,
            height: 640,
            borderRadius: 44,
            background: '#1a1a1a',
            boxShadow: '0 0 0 2px #333, 0 0 0 4px #1a1a1a, 0 32px 64px rgba(0,0,0,0.6)',
            padding: 8,
            position: 'relative',
          }}
        >
          {/* Dynamic island */}
          <div
            style={{
              position: 'absolute',
              top: 18,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 90,
              height: 24,
              borderRadius: 12,
              background: '#000',
              zIndex: 10,
            }}
          />
          {/* Screen */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 37,
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            <iframe
              src="/"
              style={{
                width: 393,
                height: 852,
                border: 'none',
                transform: 'scale(0.724)',
                transformOrigin: 'top left',
                pointerEvents: 'auto',
              }}
              title="iPhone 15 Pro preview"
            />
          </div>
        </div>
      </div>

      {/* iPhone SE — 375×667 logical px */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <span style={{ color: '#666', fontSize: 12, fontFamily: 'sans-serif', letterSpacing: 1 }}>
          iPhone SE · 375×667
        </span>
        <div
          style={{
            width: 260,
            height: 520,
            borderRadius: 36,
            background: '#1a1a1a',
            boxShadow: '0 0 0 2px #333, 0 0 0 4px #1a1a1a, 0 32px 64px rgba(0,0,0,0.6)',
            padding: 8,
            position: 'relative',
          }}
        >
          {/* Home button */}
          <div
            style={{
              position: 'absolute',
              bottom: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 36,
              height: 36,
              borderRadius: 18,
              border: '2px solid #333',
              zIndex: 10,
            }}
          />
          {/* Notch bar */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 8,
              borderRadius: 4,
              background: '#333',
              zIndex: 10,
            }}
          />
          {/* Screen */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 29,
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            <iframe
              src="/"
              style={{
                width: 375,
                height: 667,
                border: 'none',
                transform: 'scale(0.653)',
                transformOrigin: 'top left',
                pointerEvents: 'auto',
              }}
              title="iPhone SE preview"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
