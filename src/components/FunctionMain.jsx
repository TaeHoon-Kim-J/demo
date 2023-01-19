import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function FunctionMain(props) {
    const [msg, setMsg] = useState(props.maleYn);
    // const [state, setState] = useState({cnt : 0});
    const [cnt, setCnt] = useState(0);
    function changeMsg(e) {
        e.preventDefault();
        setMsg(msg === "true" ? "false" : "true");
    }

    // const changeCnt = val =>
    // setState({
    //     ...state,
    //     [val] : state[val] +1
    // })
    //
    // const { cnt } = state;
    return (
        <div>
            <main>
                <h1 style={{color: props.color}}>{props.num}. {props.kinds} 메인입니다. {props.tcheck}. ({msg})</h1>
                <h2>체인지 버튼을 총 {cnt}번 누르셨습니다.</h2>
                <a href="#" onClick={changeMsg}>change msg</a>
                <button onClick={() => setCnt(prevCnt => prevCnt + 1)}>update Cnt</button>
                <button onClick={() => setCnt(0)}>초기화</button>
                {/*<button onClick={changeCnt.bind(null, 'cnt')}>update Cnt</button>*/}
                <Link to="/posts"><button>포스트 이동</button></Link>
            </main>
        </div>
    );
}

FunctionMain.propTypes = {
    kinds: PropTypes.string.isRequired
}

FunctionMain.defaultProps = {
    tcheck: "디폴트입니다"
}
export default FunctionMain;