import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import StyledHero from "../component/StyledHero";
import RoomContainer from "../component/RoomContainer";

export class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Could be found..</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImgs] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </StyledHero>
        <div className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((item, index) => {
              return <img key={index} src={item} alt={`${name} Images`} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="decs">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>

              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>

          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {extras.map((item, index) => {
                return <li key={index}> -{item}</li>;
              })}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default SingleRoom;
