import  React from "react";
import  ReactDOM  from "react-dom";
import SingleComment from "./SingleComment";
import pp1 from "./image/p1.jpg";
import pp2 from "./image/p2.jpeg"
import pp3 from "./image/p3.jpeg"
import UserCard from "./UserCard";
const App = () => {
    return(

    <div className="ui comments">
        <UserCard>
       <SingleComment 
       name="Alex" 
       date='Today At 6:00PM' 
       comment='it is  amazing'
       picture={pp1}/>
       </UserCard>
       <UserCard>
       <SingleComment 
       name="Jack" 
       date='Today At 5:00PM' 
       comment='Great Job'
       picture={pp3}/>
       </UserCard>
       <UserCard>
       <SingleComment 
       name="Sophia" 
       date='Today At 4:00PM' 
       comment='Awsome'
       picture={pp2}/>
       </UserCard>
    </div>
)
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)