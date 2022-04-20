import '../App.css';
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const Widget = () => {
  const { user } = useAuthContext();

  const someone = user ? true : false;

  return (
    <div className="d-flex bg-light">
      { someone ?
        <>
			<h5 className="m-3">{user?.email} </h5>
        </>
        :
        <></>
      }
    </div>
  );
}

export default Widget;
