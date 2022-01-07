import { ClickableItem } from './navbar/clickableItem';

/*TODO: To be refactored to static class with all static data */

export class StaticProvider {
  navbarItems: Array<ClickableItem> = [
    new ClickableItem('Home'),
    new ClickableItem('Politics'),
    new ClickableItem('Business'),
    new ClickableItem('Tech'),
    new ClickableItem('Science'),
    new ClickableItem('Health'),
    new ClickableItem('Sports'),
    new ClickableItem('Arts'),
    new ClickableItem('Food'),
    new ClickableItem('LifeStyle'),
    new ClickableItem('Education'),
    new ClickableItem('Travel'),
    new ClickableItem('ArtEntertainments'),
  ];
}
