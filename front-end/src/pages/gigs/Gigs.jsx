import React, { useRef, useState, useEffect } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import axios from "axios";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [gigs, setGigs] = useState([]); // State to store the original list of gigs
  const minRef = useRef();
  const maxRef = useRef();

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/services/all");
        console.log(response.data);
        setGigs(response.data); // Set the original list of gigs
        setFilteredGigs(response.data); // Initially display all gigs
      } catch (error) {
        console.error("Failed to fetch gigs", error);
      }
    };

    fetchGigs();
  }, []);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    const min = minRef.current.value ? parseInt(minRef.current.value) : 0;
    const max = maxRef.current.value ? parseInt(maxRef.current.value) : Infinity;
    const filtered = gigs.filter((gig) => gig.price >= min && gig.price <= max);
    sortGigs(filtered);
  };

  const sortGigs = (gigsToSort) => {
    const sortedGigs = [...gigsToSort].sort((a, b) => {
      if (sort === "sales") {
        return b.sales - a.sales;
      } else if (sort === "createdAt") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return 0;
      }
    });
    setFilteredGigs(sortedGigs);
  };

  useEffect(() => {
    sortGigs(filteredGigs);
  }, [sort]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    // Filter gigs based on the search term
    const filtered = gigs.filter((gig) =>
      gig.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredGigs(filtered);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Services</span>
        <h1>Explore</h1>
        <p>Explore the boundaries of technical and non-technical freelancing</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          {/* <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div> */}
          <div className="searchBox">
          <input
            type="text"
            placeholder="Search for a service..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        </div>
        
        <div className="cards">
          {filteredGigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
