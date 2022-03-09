import CollectionItem from "../../Snippets/CollectionItem";

import "./styles.scss";

function CollectionList(props) {
  return (
    <section className="collection-list">
      {props.collections &&
        props.collections.map((collection, index) => (
          <CollectionItem
            collection={collection}
            full_width={(index + 1) % 3 === 0}
          />
        ))}
    </section>
  );
}

export default CollectionList;
