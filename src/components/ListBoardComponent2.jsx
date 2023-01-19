import React, {Component, useState} from 'react';
import BoardService from "../service/Service"

function ListBoardComponent() {


    const [state, setState] = useState(this.state = {boards: []})

    BoardService.getBoards().then((res) => {
        this.setState({ boards: res.data});
    });

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>타이틀 </th>
                        <th>작성자 </th>
                        <th>작성일 </th>
                        <th>갱신일 </th>
                        <th>좋아요수</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.boards.map(
                            board =>
                                <tr key = {board.no}>
                                    <td> {board.no} </td>
                                    <td> {board.title} </td>
                                    <td> {board.author} </td>
                                    {/*<td> {board.createdDate} </td>*/}
                                    {/*<td> {board.modifiedDate} </td>*/}
                                    {/*<td> {board.likes} </td>*/}
                                    {/*<td> {board.counts} </td>*/}
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListBoardComponent;