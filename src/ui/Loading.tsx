

export function Loading({ Games }: { Games: any[] }) {
  // Проверка: если данные еще грузятся (массив пустой)
  if (!Games || Games.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 24 24"
          className="spinner"
          style={{ width: '500px', height: '500px' }}
        >
          <path
            fill="#4CAF50" 
            d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
          />
        </svg>
        
        {/* Исправленные кавычки и экранирование для TSX */}
        <style dangerouslySetInnerHTML={{__html: `
          .spinner {
            transform-origin: center !important;
            animation: spin 1.2s linear infinite !important;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
      </div>
    );
  }
}
