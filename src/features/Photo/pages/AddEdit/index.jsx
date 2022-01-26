import React from 'react';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const handleSubmit = (values) => {
        console.log('Form Submit: ', values)
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;