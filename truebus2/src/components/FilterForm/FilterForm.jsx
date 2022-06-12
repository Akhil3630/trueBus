import React from 'react';

const FilterForm = () => {
    return (
        <div>
            <section className="form-container" data-aos="zoom-in">

                <form action="">

                    <div className="inputBox">
                        <span>where to</span>
                        <input type="text" placeholder="search places"/>
                    </div>

                    <div class="inputBox">
                        <span>arrivals</span>
                        <input type="date"/>
                    </div>

                    <div class="inputBox">
                        <span>leaving</span>
                        <input type="date"/>
                    </div>

                    <input type="submit" value="book now" class="btn" />

                </form>

            </section>
        </div>
    );
}

export default FilterForm;
