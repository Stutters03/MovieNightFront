import React from 'react'
import type { FaveType } from './interface'
import { Link } from 'react-router'


const ShowFave = ({ fave, mode }: { fave: FaveType, mode: boolean }) => {

    
    const handleDeleteFave = () => { 

        // console.log("Add To Faves", transData.account_id)
        const deleteFaveReq = new Request(
            `http://localhost:3000/faves/remove/${fave._id}`,
            {
                method: 'DELETE'
            }
       )
        fetch(deleteFaveReq)
        .then(res => res.json())
        .then(msg =>{
            console.log(msg)
        })

    const handleEditFave = () => {

         const editFaveReq = new Request(
            `http://localhost:3000/faves/update/${fave._id}`,
            {
                method: 'PUT'
            }
       )
        fetch(editFaveReq)
        .then(res => res.json())
        .then(msg =>{
            console.log(msg)
        })

    }

    
    return (
        <div key={fave._id} className={mode ? "my-3 pl-9 p-3 border w-1/3" : "my-1 pl-9 p-3 border-2 w-75"}>
            {/* mode && will render the elements on the right, only if mode is true */}
            { <div>Type: {fave._id}</div>}

            <button
                onClick={handleDeleteFave}
                className="border p-2 mt-3"
            >
                Delete From Faves
            </button>

            <button
                onClick={handleEditFave}
                className="border p-2 mt-3"
            >
                Edit Faves
            </button>

        </div>
    )}}

 

export default ShowFave