import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "facundoborges",
    name: "Facundo Borges",
    isFollowing: false,
  },
  {
    userName: "gndx",
    name: "Gonzalo Nunez",
    isFollowing: false,
  },
];

export function App () {
    return (
        <section className="App">
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}