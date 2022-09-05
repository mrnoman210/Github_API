import axios from 'axios';
import { EditorState, ContentState } from 'draft-js';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CreateArtScreen = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [formats, setFormats] = useState('');
  const [description, setDescription] = useState('');

  const onEditorStateChange = (e) => {
    console.log(e.target);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGFhZjVlZWU2YWFmOTc0YWFmNzgyNCIsImlhdCI6MTY1MDI3MDYyNywiZXhwIjoxNjU4MDQ2NjI3fQ.DPNAmayBSYX1FCVqb5pAI9N3FykZk4ovoUIraqKMb_c`;

      let data = new FormData();
      data.append('coverPhoto', file);
      data.append('title', 'file uploading');
      data.append('description', description);
      data.append('cost', 300);
      data.append('resolutionWidth', 1020);
      data.append('resolutionHeight', 600);

      // data.append('formats', ['png', 'jpg', 'psd']);
      // dont do in this way  formats will save in this way in db "formats": ["png,xd,psd,jpg"]

      for (const format of formats.split(',')) {
        data.append('formats', format.trim());
      }
      for (const file of files) {
        data.append('gallery', file);
      }

      data.append('orientation', 'portrait');
      data.append('subject', 'uploading');

      const res = await axios({
        url: `http://localhost:8000/api/v1/arts`,
        method: 'POST',
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log({ res });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='artScreen'>
      <h1>File Uploading</h1>
      <form onSubmit={formHandler} className='createArtScreen_form'>
        <input
          type='file'
          name='coverPhoto'
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type='file'
          name='gallery'
          multiple
          required
          onChange={(e) => setFiles(e.target.files)}
        />
        <input
          type='text'
          placeholder='Enter comma separated formats'
          required
          onChange={(e) => setFormats(e.target.value)}
        />
        <textarea
          name='description'
          id=''
          cols='30'
          rows='10'
          placeholder='Please enter your art description'
          required
        >
          <Editor
            editorState={description}
            onEditorStateChange={onEditorStateChange}
          />
        </textarea>
        {/* <Editor
          editorState={description}
          wrapperClassName='wrapperClassName'
          toolbarClassName='toolbarClassName'
          editorClassName='editorClassName'
          onEditorStateChange={onEditorStateChange}
        /> */}
        <Editor
          editorState={description}
          onEditorStateChange={onEditorStateChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateArtScreen;
