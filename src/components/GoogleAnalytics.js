import { Component } from "react";
import ReactGA from "react-ga";
import config from "../config";

ReactGA.initialize(config.googleAnalyticsKey);

export function logReviewEvent(cardId) {
  ReactGA.set({ cardId });
  ReactGA.event({
    category: "User",
    action: "Reviewed a card",
    label: cardId,
  });
}

export function logCompletedEvent(deckId) {
  ReactGA.set({ deckId });
  ReactGA.event({
    category: "User",
    action: "Completed a deck stage",
    label: deckId,
  });
}

export function logFinishedEvent(deckId) {
  ReactGA.set({ deckId });
  ReactGA.event({
    category: "User",
    action: "Finished reviewing a deck",
    label: deckId,
  });
}

export function logReviewAgainEvent(deckId) {
  ReactGA.set({ deckId });
  ReactGA.event({
    category: "User",
    action: "Clicked review again",
    label: deckId,
  });
}

export function logKeepGoingEvent(deckId) {
  ReactGA.set({ deckId });
  ReactGA.event({
    category: "User",
    action: "Clicked keep going",
    label: deckId,
  });
}

export function logStarDeckEvent(deckId) {
  ReactGA.set({ deckId });
  ReactGA.event({
    category: "User",
    action: "Starred a deck",
    label: deckId,
  });
}

class GoogleAnalytics extends Component {
  render() {
    ReactGA.set({ page: window.location.pathname + window.location.hash });
    ReactGA.pageview(window.location.pathname + window.location.hash);
    return null;
  }
}

export default GoogleAnalytics;
