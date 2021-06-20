import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

if (module.hot) {
    module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 2:00PM"
                content="Nice blog post"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00PM"
                content="Nice blog post2"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Today at 2:00PM"
                content="Nice blog post3"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
