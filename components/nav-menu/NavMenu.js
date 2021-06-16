import styles from "./NavMenu.module.css";
import Link from "next/link";

export default function SiteNav({ routes }) {
  const renderRoutes = () => {
    return routes.map((route) => {
      return (
        <Link href={route.path}>
          <a style={{fontWeight: '400'}}>
              <div
                style={{
                  lineHeight: '65px'
                }}
              >
                {route.name}
              </div>
           
          </a>
        </Link>
      );
    });
  };

  return <div className={styles.container}>{renderRoutes()}</div>;
}
