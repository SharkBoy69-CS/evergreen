import Button from "../components/Button";
import Header from "../components/Header";
import Description from "../components/Description";
import Welcome from "../components/Welcome";
import Username from "../components/Username";

import { ReactComponent as Github } from "../assets/icons/svg/github.svg";
import { ReactComponent as android } from "../assets/icons/svg/android.svg";
import { ReactComponent as Kofi } from "../assets/icons/svg/kofi.svg";
import { ReactComponent as OF } from "../assets/icons/svg/onlyfans.svg";
import { ReactComponent as telegram } from "../assets/icons/svg/telegram.svg";

function Home() {
  return (
    <>
      <Header profile="https://avatars.githubusercontent.com/u/58356637?s=400&u=3c76f657b46dd5adb9bf0bd92e495ddbd42aac52&v=4"/>
    
      <Username text="Achille"/>
    
      <Welcome text="Hi, welcome on my page !"/>
    
      <Button
        text="Github"
        link="https://github.com/0xsharkboy"
        icon={Github}
      />
      <Button
        text="Onlyfans"
        link="https://youtu.be/Pwq4rqJYH8o"
        icon={OF}
      />
      <Button
        text="Ko-fi"
        link="https://ko-fi.com/0xsharkboy"
        icon={Kofi}
      />
      <Button
        text="My XDA profile"
        link="https://xdaforums.com/m/0xsharkboy.12237521/#recent-content"
        icon={android}
      />
      <Button
        text="Contact Me"
        link="https://t.me/Oxsharkboy"
        icon={telegram}
      />
    </>
  );
};

export default Home;
