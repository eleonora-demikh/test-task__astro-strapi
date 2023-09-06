import { useState } from 'preact/hooks';

export default function Card ({ info }) {
  const [isOpened, setIsOpened] = useState(false);
  const { attributes } = info;

// Changing button-styles for opened/closed description
  let buttonStyle = '';
  let buttonText = '';

  isOpened 
    ? (
      buttonStyle = 'bg-yellow-700 scale-95',
      buttonText = 'Close description'
    ) : (
      buttonStyle = 'bg-yellow-600',
      buttonText = 'Open description'
    );
//

  const handleOpenDescription = () => setIsOpened(prev => !prev)

  return (
  <article className="m-auto flex flex-col font-serif max-w-lg border rounded my-5 p-7">
    <img 
      src={attributes.imgUrl} 
      alt={attributes.name} 
    />

    <ul className="my-5">
      <li>
        <span className="font-bold">Name: </span>
        {attributes.name}
      </li>

      <li>
        <span className="font-bold">Type: </span>
        {attributes.type}
      </li>
    </ul>

    <button 
      className={`rounded-full px-6 py-3 mb-3 font-medium text-white duration-300 ${buttonStyle}`}
      onClick={handleOpenDescription}
    >
      {buttonText}
    </button>

    {isOpened && (
      <p>{attributes.description}</p>
    )}
    
  </article>)
}