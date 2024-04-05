import { useNavigate } from "react-router-dom";

const RoomManagement = () => {
    const navigate = useNavigate();
    const handleUser = () =>{
        navigate("/users")
    }
    const handleBook = () => {
      navigate("/books")
    }
  return (
    <div>
       <div id ="room_book_management">
            <div className="room" onClick={handleUser}>Users</div>
            <div className="reservation" onClick={handleBook}>Books</div>
        </div>
    </div>
  );
}

export default RoomManagement;
