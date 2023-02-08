import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-great">
          <li> NewxtJS is great</li>
        </Link>
        <li>NewxtJS is great</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
