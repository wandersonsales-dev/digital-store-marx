import Logo from "../logo/Logo";
import LogoImage from "../../../assets/logo-header.svg";
import ButtonSearch from "../button-search/ButtonSearch";
import Search from "../search/Search";
import { useState } from "react";
import "./Header.css";
import MainMenu from "../main-menu/MainMenu";

export default function Header() {
  const [showSearchForm, setShowSearchForm] = useState(false);

  return (
    <div className="header">
      <MainMenu />
      <Logo logo={LogoImage} />
      <ButtonSearch
        onClick={() => setShowSearchForm(!showSearchForm)}
        isActive={showSearchForm}
      />
      {showSearchForm && <Search onSubmit={() => setShowSearchForm(false)} />}
    </div>
  );
}
