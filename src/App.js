import { useState, useRef } from "react";

export default function CatFriends() {
  const map = useRef(new Map()).current;
  const [index, setIndex] = useState(0);
  return (
    <>
      <nav>
        <button
          onClick={() => {
            let active = 0
            if (index < catList.length - 1) {
              active = index+1;
            } 
            setIndex(active)
            map.get(active)?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(img) => map.set(i, img)}
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
