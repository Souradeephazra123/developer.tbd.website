import React from 'react';
import Link from '@docusaurus/Link';
import Button from './Button';

function HeroCard({
  heroText,
  bodyText,
  buttonUrl,
  buttonText,
  primary = false,
  themeColor = 'cyan',
  imgSrc,
}) {
  return (
    <div
      className={`${primary ? `primary-theme-card`: ``} theme-card theme-card-${themeColor} relative p-8 rounded-xl shadow-lg tablet:w-full desktop:w-full only:w-full my-8 min-h-[240px] flex flex-col justify-between`}
    >
      {imgSrc && (
        <img
          className="w-40 px-2 absolute bottom-0 right-0 hidden md:block"
          src={imgSrc}
        />
      )}

      <h2 className="text-2xl font-bold mb-4">{heroText}</h2>
      <p className="w-1/2">{bodyText}</p>
      <div className="max-w-[240px] hero-button">
        <Link href={buttonUrl}>
          <Button label={buttonText} url={buttonUrl} colorDarkMode={themeColor}/>
        </Link>
      </div>
    </div>
  );
}

export default HeroCard;
