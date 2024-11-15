import { useState, useEffect } from 'react';
import './Reviews.css';
import Reviews from './Reviews';
import reviewsData from '../../data/reviews.json'; 

function ReviewsComponent() {
    const [items, setItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectionModalIsOpen, setSelectionModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        setItems(reviewsData);
    }, []);

    const openModal = (item) => {
        setCurrentItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentItem(null);
    };

    const addItem = () => {
        setSelectionModalIsOpen(true); 
    };

    const selectCard = (index) => {
        const newItem = {
            id: Date.now(),
            image: reviewsData[index].image,
            author: reviewsData[index].author,
            job: reviewsData[index].job
        };
        setItems([...items, newItem]);
        setSelectionModalIsOpen(false); 
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id)); 
        closeModal(); 
    };

    const handleInputChange = (e) => {
        const newJob = e.target.value;
        if (currentItem) {
            setCurrentItem({ ...currentItem, job: newJob });
        }
    };

    const saveChanges = () => {
        if (currentItem) {
            const updatedItems = items.map(item => {
                if (item.id === currentItem.id) {
                    return { ...item, job: currentItem.job };
                }
                return item;
            });
            setItems(updatedItems);
            closeModal();
        }
    };

    return (
        <main>
            <div className="rev1">
                <button className="button" onClick={addItem}>Добавить</button>
                <div className="rev2">
                    {items.map((item) => (
                        <div key={item.id} onClick={() => openModal(item)} style={{ cursor: 'pointer' }}>
                            <Reviews
                                image={item.image}
                                author={item.author}
                                job={item.job}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {modalIsOpen && currentItem && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{currentItem.author}</h2>
                        <p>{currentItem.job}</p>
                        <input
                            type="text"
                            value={currentItem.job}
                            onChange={handleInputChange}
                        />
                        <button className="button" onClick={saveChanges}>Сохранить изменения</button>
                        <button className="button delete" onClick={() => deleteItem(currentItem.id)}>Удалить карточку</button>
                    </div>
                </div>
            )}

            {selectionModalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectionModalIsOpen(false)}>&times;</span>
                        <h2>Выберите карточку</h2>
                        <div className="card-selection">
                            {reviewsData.map((item, index) => (
                                <div key={index} className="card" onClick={() => selectCard(index)}>
                                    <Reviews
                                        image={item.image}
                                        author={item.author}
                                        job={item.job}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default ReviewsComponent;