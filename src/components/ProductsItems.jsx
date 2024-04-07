import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import frontPic from "../assets/Front Pic.png";
import frontpic2 from "../assets/FrontPic2.svg";
import bel from "../assets/bel.png";
import cap from "../assets/cap.png";
import bagBack from "../assets/bag-back.png";
import dragen from "../assets/dragen.png";
import belet from "../assets/belet.png";
import bagFlod from "../assets/bag-flod.png";
import bagFull from "../assets/bag-full.png";
import sock from "../assets/sock.png";
import ff from "../assets/ff.png";
import bag2 from "../assets/bag-2.png";
import haert from "../assets/heart.png";

import "../styles/ProductsItems.css";

const ProductsItems = () => {
  const [like, setLike] = useState(true);

  const likeImg = () => {
    setLike(!like);
  };
  const unLikeImg = () => {
    setLike(!like);
  };
  return (
    <div className="productsItems-container">
      <div>
        {/* <h1>NewProducts</h1> */}
        <img src={frontPic} alt="front-pic" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={frontpic2} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bel} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={cap} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bagBack} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={dragen} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={belet} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bagFlod} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bagFull} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={sock} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={ff} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bag2} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bel} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={frontpic2} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={cap} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bagFull} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bagBack} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        <img src={bag2} alt="out" className="products-image" />
        <p className="pxo">PPXOC MILKYWAY DRESS IN...</p>
        <div className="hart">
          <p className="sin">
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {like ? (
            <GoHeart className="heart" onClick={likeImg} />
          ) : (
            <img
              src={haert}
              alt="like img"
              onClick={unLikeImg}
              className="heart"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
