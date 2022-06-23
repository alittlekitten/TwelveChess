import Nickname from "../component/setnickname/Nickname";
import Logo from "../component/setnickname/Logo";

const SetNickname = (props) => {
  const { setTap } = props;
  return (
    <div>
      <Logo />
      <Nickname setTap={setTap} />
    </div>
  );
};

export default SetNickname;
