import React, { useState, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar: React.FC = () => {
    const [text,setText] = useState<string>("");
    let [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');


    function handleSubmit() {
        setSearchParams({search: text});
      }
    
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" onChange={e => setText(e.target.value)} className="form-control" placeholder="Search..." />
                <button type="button" onClick={handleSubmit} className="btn btn-primary">Click</button>
            </div>
        </>
  );
};

export default SearchBar;
