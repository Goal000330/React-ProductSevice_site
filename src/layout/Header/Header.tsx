import { HeaderStyles } from "./HeaderStyles";

export default function Header() {
  const classes = HeaderStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchRoot}>
        <div className={classes.searchIcon}>
          <i className='far fa-search'></i>
        </div>
        <div className={classes.searchInput}>キーワードから探す</div>
      </div>
    </div>
  );
}
