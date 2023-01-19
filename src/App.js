import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListBoardComponent from "./components/ListBoardComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ClassMain from "./components/ClassMain"
import FunctionMain from "./components/FunctionMain"
import Wrapper from "./components/Wrapper"
import dummy from "./db/data.json"

function App() {
    // const nums = [{kinds : "함수형1", num : "2"}, {kinds : "함수형2", num : "3"}, {kinds : "함수형3", num : "4"}]
    // let numList = nums.filter(v => v.num < 4)
    // numList = numList.map((v) => (<FunctionMain kinds={v.kinds} color="red" num={v.num} maleYn/>))

    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <ClassMain kinds="클래스형" color="blue" num={1} />
                    <p></p>
                    <Wrapper>
                        {dummy.nums.map(user => (
                            <FunctionMain key={user.kinds} kinds={user.kinds} color="red" num={user.num} maleYn></FunctionMain>
                        ))}
                    </Wrapper>
                    <Routes>
                        <Route path = "/" exact component = {ListBoardComponent}></Route>
                        <Route path = "/posts" element={<ListBoardComponent />}></Route>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}
export default App;
