const { useEffect, useState, useRef } = React
const { Image, Spin, Row, Col } = antd

const typeArr = [
  "All",
  "JavaScript",
  "Ruby",
  "Java",
  "CSS",
  "Python",
]

const Nav = props => {
  const { onTypeChange, type } = props;
  const activeStyle = {
    color: "#c04539",
    margin: "0 10px",
    fontSize: "24px",
    cursor: "pointer",
  };
  const commonStyle = {
    margin: "0 10px",
    fontSize: "24px",
    cursor: "pointer",
  };
  const handleClick = (index) => {
    onTypeChange(typeArr[index]);
  };
  return (
    <div>
      <div style={{ width: "100%", textAlign: "center", margin: "20px 0" }}>
        {typeArr.map((item, index) => {
          return (
            <span
              style={item === type ? activeStyle : commonStyle}
              onClick={() => handleClick(index)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

function Card(props) {
  const { index, owner, open_issues_count, stargazers_count, forks, html_url } =
    props;

  const iconStyle = {
    height: "22px",
    width: "22px",
    textAlign: "center",
    marginRight: "10px",
  };
  return (
    <a
      href={html_url}
      target="_blank"
      className="db br1 bg-light-gray mb4 pv3 shadow-hover no-underline color-inherit w-80 center"
      rel="noreferrer"
    >
      <div className="flex flex-column justify-center items-center">
        <h2 className="mb2 mt0">#{index}</h2>
        <Image
          src={owner.avatar_url}
          preview={false}
          width="100px"
          height="100px"
          placeholder={
            <div className="w-100 h-100 tc">
              <Spin />
            </div>
          }
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
        />
        <h4 className="f4 mt3 mb1 red">{owner.login}</h4>
        <div className="ph4 tl w-100 f5">
          <p className="mv2 flex items-center" title={owner.login}>
            {/* <FontAwesomeIcon icon={faUser} color="#ffbf74" fixedWidth /> */}
            <i
              className="fas fa-user"
              style={{ ...iconStyle, color: "#ffbf74" }}
            ></i>
            <span className="ml2 flex-auto-l truncate">{owner.login}</span>
          </p>
          <p className="mv2 flex items-center">
            {/* <FontAwesomeIcon icon={faStar} color="#ffd701" fixedWidth /> */}
            <i
              className="fas fa-star"
                style={{ ...iconStyle, color: "#ffd701" }}
              ></i>
            <span className="ml2">{stargazers_count}</span>
          </p>
          <p className="mv2 flex items-center">
            {/* <FontAwesomeIcon icon={faCodeBranch} color="#8dc6f3" fixedWidth /> */}
            <i
              className="fas fa-code-branch"
              style={{ ...iconStyle, color: "#8dc6f3" }}
            ></i>
            <span className="ml2">{forks}</span>
          </p>
          <p className="mv2 flex items-center">
            {/* <FontAwesomeIcon
              icon={faExclamationTriangle}
              color="#f18d95"
              fixedWidth
            /> */}
            <i
              className="fas fa-exclamation-triangle"
              style={{ ...iconStyle, color: "#f18d95" }}
            ></i>
            <span className="ml2">{open_issues_count}</span>
          </p>
        </div>
      </div>
    </a>
  );
}

function Content({ list }) {
  return (
    <Row className="flex items-center justify-around pv3" wrap>
      {list.map((li, i) => (
        // eslint-disable-next-line
        <Col key={li.id + li.name + i} lg={6} md={8} sm={12} xs={24}>
          <Card {...li} index={i + 1} />
        </Col>
      ))}
    </Row>
  );
};



const LoadMoreButton = props => {
  const style = {
    cursor: 'pointer',
    color: '#fff',
    background: "#1ba8e0",
    border: "none",
    borderRadius: 4,
    padding: "8px 16px"
  }
  return (
    <div style={{ textAlign: 'center', margin: "20px 0" }}>
      <button { ...{ ...props, style } }>加载更多</button>
    </div>
  )
}

const App = () => {
  const [ type, setType ] = useState(() => {
    const params = new URLSearchParams(location.search)
    const type = params.get('t') || 'All'
    return type
  });
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);
  const [ page, setPage ] = useState(1);

  const handleMore = () => {
    setLoading(true);
    setPage(page + 1);
  }

  const getUrl = (type, page = null) => `https://api.github.com/search/repositories?q=stars:%3E1${
    type !== 'All' ? `+language:${type}` : ''
    }&sort=stars&order=desc&type=Repositories${page ? '&page=' + page : ''}`

  useEffect(() => {
    const fetchData = async () => {
      setPage(1);
      setLoading(true);
      setData([]);
      try {
        const { data: res } = await axios.get(
          getUrl(type),
        );
        setData(res.items);
        setLoading(false);
        setPage(page + 1);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);
  useEffect(() => {
    const fetchData = async () => {
      if (loading && data.length > 0) {
        try {
          const { data: res } = await axios.get(
            getUrl(type, page),
          );
          setData([...data, ...res.items]);
          setLoading(false);
        } catch (error) {
          setData([]);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [loading]);

  const handleChangeParams = (type) => {
    setType(type)
    const url = new URL(location.href)
    const search = url.searchParams
    search.set('t', type)
    url.search = search.toString()
    history.pushState({}, document.title, url.toString())
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <Nav type={type} onTypeChange={handleChangeParams} />
      <Content list={data} loading={loading} />
      {
        !loading 
        && <LoadMoreButton onClick={handleMore} />
      }
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("container")
);