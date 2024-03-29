import React, { Component } from "react";
import { RoomContext } from "./context";
import Loading from "./component/Loading";
import Room from "./component/Room";
import Title from "./component/Title";

export class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    // console.log(featuredRooms);
    return (
      <section className="featured-rooms">
        <Title title="featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRoom;
