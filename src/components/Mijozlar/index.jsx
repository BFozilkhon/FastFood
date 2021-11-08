import React from "react";
import ImageUploading from "react-images-uploading";
import {
  Container,
  Flexing,
  Input,
  Wrapper,
  Select,
  Area,
  Box,
  Img,
  Title,
  Btn,
  Parent,
  Yukla,
} from "./style";
import Navbar from "../../components/Buyurtmalar/Navbar";
import yuklash from "../../assets/icons/rasmyuklash.svg";
const Mijozlar = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Flexing>
          <Input placeholder="Sarlavha" type="text" />
          <Flexing int>
            <Select>
              <option value="">Barchaga</option>
              <option value="">Solo</option>
              <option value="">Duo</option>
            </Select>
            <Select>
              <option value="">Yakshanba</option>
              <option value="">Shanba</option>
              <option value="">Seshanba</option>
            </Select>
            <Select>
              <option value="">9:00</option>
              <option value="">11:20</option>
              <option value="">13:45</option>
            </Select>
          </Flexing>
        </Flexing>
        <Area type="text" placeholder="Izoh" />
        <Box>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Img
                  src={yuklash}
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                />
                &nbsp;
                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                {imageList.map((image, index) => (
                  <Yukla src={image["data_url"]} alt="" />
                ))}
              </div>
            )}
          </ImageUploading>
          {/* // <Img src={yuklash} alt="yuklab olish" /> */}
          <Title>Rasm Yuklash</Title>
        </Box>
        <Parent>
          <Btn>Bekor qilish</Btn>
          <Btn green>Saqlash</Btn>
        </Parent>
      </Container>
    </Wrapper>
  );
};

export default Mijozlar;
