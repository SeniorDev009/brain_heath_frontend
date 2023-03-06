import React, { useState, useRef } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { slugify } from "../../utils";
import PostCard from './layout/PostCard'

const filters = [
  {
    id: 1,
    category: "All",
  },
  {
    id: 2,
    category: "HEALTH AND WELLNESS",
  },
  {
    id: 3,
    category: "ADD/ADHD",
  },
  {
    id: 4,
    category: "STRESS AND PTSD",
  },
  {
    id: 4,
    category: "BRAIN HEALTH PROBLEMS",
  },
];

const defaultActiveCat = slugify(filters[0].category);

const PostCustom = ({ postData }) => {
  const defaultData = postData
  const [activeNav, setActiveNav] = useState(defaultActiveCat);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (e) => {
    let filterText = slugify(e.target.textContent);
    setActiveNav(filterText);

    let tempData = [];

    for (let i = 0; i < postData.length; i++) {
      const element = postData[i];
      let categories = element["cate"];

      if (slugify(categories).includes(filterText)) {
        tempData.push(element);
      }
    }

    setTabPostData(tempData);
  };

  // const hoverRef = useRef();
  // HoverActiveClass(hoverRef);
  // const getMarkdownConverted = async () => {
  //   const res = await markdownToHtml(postData[0].attributes.description)
  //   setContent(res)
  // }
  // useEffect(() => {
  //   getMarkdownConverted()
  // }, [])

  return (
    <>
      <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
        <Nav className="axil-tab-button nav nav-tabs mt--20">
          {filters.map((data) => (
            <Nav.Item key={data.id}>
              <Nav.Link
                onClick={handleChange}
                eventKey={slugify(data.category)}
              >
                {data.category}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Tab.Container>
    </>
  )
}

export default PostCustom