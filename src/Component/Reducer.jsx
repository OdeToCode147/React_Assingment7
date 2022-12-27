import Student from "./Student";
import Addstudent from "./Addstudent";

const Reducer = (state = "", action) => {
  switch (action) {
    case Addstudent:
      return <Addstudent />;
    default:
      return <Student />;
  }
};

export default Reducer;
