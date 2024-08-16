import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import { useNavigate } from "react-router-dom";


export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  const navigate = useNavigate();

  return (
    <div>
        <button className='button' onClick={() => navigate('/')}>Return to previous page</button>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}