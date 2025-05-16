import React, { Suspense } from "react";
import Loading from "../components/Loading";
// import FacebookPost from "../components/FacebookPost";
// const FacebookPost = React.lazy(() => import("../components/FacebookPost"));

const PostPage = () => {
  const FacebookPost = React.lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(import("../components/FacebookPost"));
        }, 1000);
      })
  );
  return (
    <div>
      <Suspense fallback={<Loading  />}>
        <FacebookPost />
      </Suspense>
    </div>
  );
};

export default PostPage;
