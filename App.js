import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/logo.jpg";

/* 
Header
Body --
      Restaurant card
Footer
*/

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div>
        <img id="logo" src={logo} />
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About US</li>
        <li>Contact US</li>
      </ul>
    </div>
  );
};

const resList =[
  {
    "info": {
      "id": "15508",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Sahakara Nagar Main Road",
      "areaName": "Sahakara Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-08 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-main-road-sahakara-nagar-bangalore-15508",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23752",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/f95f3c3a-663c-489f-9689-d1b5d4d74fe2_23752.jpg",
      "locality": "Byatarayanapura",
      "areaName": "Sahakara Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-08 02:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹250",
        "discountTag": "GET"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-byatarayanapura-sahakara-nagar-bangalore-23752",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "82515",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "dmqhnnatbhiiid9xwrpg",
      "locality": "Marigowda Road",
      "areaName": "Yelahanka",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.6,
      "parentId": "10804",
      "avgRatingString": "3.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 7.2,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "7.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-07 23:30:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹200",
        "discountTag": "GET"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-marigowda-road-yelahanka-bangalore-82515",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "416876",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Nanjappa Main Road",
      "areaName": "New BEL Road",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-08 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹80 OFF",
        "subHeader": "ABOVE ₹200",
        "discountTag": "GET"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-nanjappa-main-road-new-bel-road-bangalore-416876",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "18983",
      "name": "Just Shawarma",
      "cloudinaryImageId": "gwk8yt51fblxwwlnxhtf",
      "locality": "Kempapura",
      "areaName": "Hebbal",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Snacks",
        "Mediterranean",
        "Fast Food",
        "Arabian",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "522",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-07 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹80 OFF",
        "subHeader": "ABOVE ₹200",
        "discountTag": "GET"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/just-shawarma-kempapura-hebbal-bangalore-18983",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "64755",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "rin54diizoi7lbg9jpno",
      "locality": "HMT Layout",
      "areaName": "Vidyaranyapura",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-07 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹250",
        "discountTag": "GET"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-hmt-layout-vidyaranyapura-bangalore-64755",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "297304",
      "name": "Daily Sushi",
      "cloudinaryImageId": "nakaptctbt6ucxev04ta",
      "locality": "CQAL Layout",
      "areaName": "Sahakar Nagar",
      "costForTwo": "₹1200 for two",
      "cuisines": [
        "Japanese",
        "Asian",
        "Korean"
      ],
      "avgRating": 4.2,
      "parentId": "7388",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 0.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "0.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-07 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pan-Asian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pan-Asian.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹200",
        "discountTag": "GET"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/daily-sushi-cqal-layout-sahakar-nagar-bangalore-297304",
      "type": "WEBLINK"
    }
  }
] 
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <div>{resData.info.cuisines.join()}</div>
      <h4>{resData.info.avgRatingString}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div>Search</div>
      <div className="rest-container">
        {resList.map((resObj) => {
          console.log(resObj);
         return <RestaurantCard key={resObj.info.id} resData={resObj} />;
        })}
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
