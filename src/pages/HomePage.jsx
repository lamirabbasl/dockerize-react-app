import { Link } from "react-router-dom";

// srcs
import video1 from "../assets/redux.mp4";
import video2 from "../assets/react-query.mp4";

function HomePage() {
  return (
    <div>
      <h2>آموزش خود را شروع کنید</h2>
      <p>با زدن هر کدام از دکمه های زیر وارد آموزش موردنظر شوید</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Link
          to="/video/redux"
          state={{
            videoSrc: video1,
            title: "(redux/redux-toolkit) معرفی ریداکس و ریداکس تولکیت",
          }}
        >
          Redux
        </Link>
        <Link
          to="/video/react-query"
          state={{
            videoSrc: video2,
            title: "React Query همه چیز درباره",
          }}
        >
          React Query
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
