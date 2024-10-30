import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';
import axios from "axios"


const data = [
    {
      id: "672221aa1151af5de1c49fcb",
      firstName: "Sangam",
      lastName: "Mundhe",
    },
    {
      id: "672221ba1151af5de1c49fce",
      firstName: "Manoj",
      lastName: "Lakade",
    },
    {
      id: "672221c61151af5de1c49fd1",
      firstName: "Tushar",
      lastName: "Shitole",
    },
    {
      id: "672221c61151af5de1c49fd2",
      firstName: "Rahul",
      lastName: "Patil",
    },
  ];
  

const Users = () => {

    const { filter: initialFilter } = useParams();
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState(initialFilter || "");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/user/bulk?filter=${filter}`);
                setUsers(response.data.user);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();

        return () => { };
    }, [filter]);



  return (
        <div>
                 <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                />
            </div>
            <div>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>

  )
}

export default Users





function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>{user.firstName} {user.lastName}</div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <Button
                    onClick={() => {
                        navigate(`/send?id=${user.id}&name=${user.firstName}`);
                    }}
                    label="Send Money"
                />
            </div>
        </div>
    );
}