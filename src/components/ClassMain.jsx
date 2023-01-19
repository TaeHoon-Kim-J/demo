import React, {Component, useState} from 'react';

class ClassMain extends Component {
    // constructor(props) {
    //     super(props);
    //     const [num, setNum] = useState(1)
    //
    //     function changeNum() {
    //         setNum(num*10);
    //     }
    // }
    render() {
        return (
            <div>
                <main>
                    <h1 style={{color:this.props.color}}>{this.props.num}. {this.props.kinds} 메인입니다.</h1>
                    {/*<button onClick={changeNum}>changeNum</button>*/}
                </main>
            </div>
        );
    }
}


export default ClassMain;