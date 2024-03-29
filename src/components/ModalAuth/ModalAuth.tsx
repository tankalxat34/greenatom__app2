import React, { useState } from "react";
import Input, { EyeInput } from "../Input/Input";
import Button from "../Button/Button";
import style from "./ModalAuth.module.scss";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Loader from "../Loader/Loader";

interface IPropsModal {
  handlerAuth: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  path: string;
  link: string;
  type: Type;
}

type Type = "register" | "login";

const ModalAuth = ({ handlerAuth, title, path, link, type }: IPropsModal) => {
  const [spinner, setSpinner] = useState(false);
  return (
    <div className={style.content}>
      <div className={style.wrapper}>
        <div>
          <h2 className={style.title}>{title}</h2>
          {/* <Link to={`/${path}`} className={style.link}>
            {link}
          </Link> */}
        </div>

        <form
          className={style.form}
          id="formElement"
          onSubmit={(e) => {
            handlerAuth(e);
            setSpinner(true);
          }}
        >
          {type === "login" ? (
            <>
              <div>
                <label htmlFor="username">Логин</label>
                <Input
                  type="text"
                  placeholder="Введите логин..."
                  id="username"
                  name="username"
                />
              </div>

              <div>
                <label htmlFor="password">Пароль</label>
                <EyeInput
                  placeholder="Введите пароль..."
                  name="password"
                  id="password"
                />
              </div>

              {
                spinner
                ? <Loader />
                : <Button viewtype="v2">ВОЙТИ</Button>
              } 
            </>
          ) : (
            <>
              <div>
                <label htmlFor="username">Логин</label>
                <Input
                  type="text"
                  placeholder="Введите логин..."
                  id="username"
                  name="username"
                />
              </div>

              <div>
                <label htmlFor="username">Почта</label>
                <Input
                  type="email"
                  placeholder="Введите почту..."
                  id="email"
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="password">Пароль</label>
                <EyeInput
                  placeholder="Введите пароль..."
                  name="password"
                  id="password"
                />
              </div>

              <div>
                <label htmlFor="password">Повтор пароля</label>
                <EyeInput
                  placeholder="Введите повторно пароль..."
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>

              <Button viewtype="v2">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default observer(ModalAuth);
