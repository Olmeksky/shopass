import React from 'react';
import myVK from '../img/social/vk.png';
import myWA from '../img/social/wa.png';
import myTLG from '../img/social/tlg.png';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <div class="copy">
              <p>CopyRight 24 &copy;</p>
              <a class="footer-policy" href="/policy/" target="_blank">Политика конфиденциальности</a>
              <a class="footer-policy" href="/home/map/" target="_blank">Карта сайта</a>
              <small>Продвижение и ракрутка сайтов, новые каналы продаж. Маркетинговые воронки под ключ. Создание и ведение эффективной рекламной компании. Дизайн и верстка уникальных рекламных материалов: баннеры, листовки, сторис. Оформление социальных сетей для продажи услуг и товаров.</small>
            </div>
          </div>
          <div class="col-md-3">
            <ul class="footer_menu">
              <li>О нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="footer-contacts">
              <p class="footer-contacts_phone"><a href="tel:+79932550347">+7(993)255-03-47</a></p>
              <p class="footer-contacts_email"><a href="mailto:ShuSashi@ya.ru">ShuSashi@ya.ru</a></p>
            </div>
            <div class="footer-social">
              <ul>
                <li><img src={myVK} alt="ВКонтакте" /></li>
                <li><img src={myWA} alt="WatsApp" /></li>
                <li><img src={myTLG} alt="Telegram" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
