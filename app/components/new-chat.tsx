import React from "react";
import { Path } from "../constant";
import { IconButton } from "./button";
import styles from "./new-chat.module.scss";

import LeftIcon from "../icons/left.svg";
import LightningIcon from "../icons/lightning.svg";
import EyeIcon from "../icons/eye.svg";

import { useLocation, useNavigate } from "react-router-dom";
import Locale from "../locales";
import { useAppConfig, useChatStore } from "../store";
import { useCommand } from "../command";
import { showConfirm } from "./ui-lib";

export function NewChat() {
  const chatStore = useChatStore();
  const navigate = useNavigate();
  const config = useAppConfig();
  const { state } = useLocation();

  const startChat = () => {
    setTimeout(() => {
      chatStore.newSession();
      navigate(Path.Chat);
    }, 10);
  };

  return (
    <div className={styles["new-chat"]} style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles["mask-header"]}>
        <IconButton
          icon={<LeftIcon />}
          text={Locale.NewChat.Return}
          onClick={() => navigate(Path.Home)}
        />
        {!state?.fromHome && (
          <IconButton
            text={Locale.NewChat.NotShow}
            onClick={async () => {
              if (await showConfirm(Locale.NewChat.ConfirmNoShow)) {
                startChat();
                config.update(
                  (config) => (config.dontShowMaskSplashScreen = true),
                );
              }
            }}
          />
        )}
      </div>

<iframe 
    src="https://aimj.ru/midjourney.html"
    style={{ flex: 1, width: '100%' }}
    title="Embedded Site" 
    frameBorder="0"
/>

      <div className={styles["title"]}>{Locale.NewChat.Title}</div>
      <div className={styles["sub-title"]}>{Locale.NewChat.SubTitle}</div>

      <div className={styles["actions"]}>
        <IconButton
          text={Locale.NewChat.More}
          onClick={() => navigate(Path.Masks)}
          icon={<EyeIcon />}
          bordered
          shadow
        />

        <IconButton
          text={Locale.NewChat.Skip}
          onClick={startChat}
          icon={<LightningIcon />}
          type="primary"
          shadow
          className={styles["skip"]}
        />
      </div>
    </div>
  );
}


