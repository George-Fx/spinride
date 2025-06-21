export const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <span
        style={{
          width: 32,
          height: 32,
          border: '2px solid #FF8A71',
          borderRadius: '50%',
          display: 'inline-block',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
    </div>
  );
};
