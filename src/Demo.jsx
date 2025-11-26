import React from "react";
import { useFetch } from "./hooks/useFetch";

function Demo() {
  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>

      {isLoading && <div>Загрузка...</div>}

      {error && <div>Произошла ошибка</div>}

      {data &&
        !isLoading &&
        data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default Demo;
