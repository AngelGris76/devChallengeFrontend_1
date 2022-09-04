import Button from './components/Button';
import style from './App.module.css';
import CartIcon from './components/icons/CartIcon';

const App = () => {
  return (
    <div className={style.body}>
      <main className={style.mainContainer}>
        <h1>Buttons</h1>
        <div>
          <span className={style.description}>{`<Button />`}</span>
          <span className={style.buttonContainer}>
            <Button text='Default' />
          </span>
        </div>
        <div>
          <span
            className={style.description}
          >{`<Button variant='outline' />`}</span>
          <span className={style.buttonContainer}>
            <Button text='Default' variant='outline' />
          </span>
        </div>
        <div>
          <span
            className={style.description}
          >{`<Button variant='text' />`}</span>
          <span className={style.buttonContainer}>
            <Button text='Default' variant='text' />
          </span>
        </div>
        <div>
          <span
            className={style.description}
          >{`<Button disableShadow />`}</span>
          <span className={style.buttonContainer}>
            <Button text='Default' color='primary' disableShadow />
          </span>
        </div>
        <div className={style.disabledButtons}>
          <div>
            <span className={style.description}>{`<Button disabled />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Disabled' disabled />
            </span>
          </div>
          <div>
            <span
              className={style.description}
            >{`<Button variant='text' disabled />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Disabled' variant='text' disabled />
            </span>
          </div>
        </div>
        <div className={style.iconButtons}>
          <div>
            <span
              className={style.description}
            >{`<Button startIcon={CartIcon} />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='primary' startIcon={CartIcon} />
            </span>
          </div>
          <div>
            <span
              className={style.description}
            >{`<Button endIcon={CartIcon} />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='primary' endIcon={CartIcon} />
            </span>
          </div>
        </div>
        <div className={style.sizeButtons}>
          <div>
            <span className={style.description}>{`<Button size='sm' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='primary' size='sm' />
            </span>
          </div>
          <div>
            <span className={style.description}>{`<Button size='md' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='primary' size='md' />
            </span>
          </div>
          <div>
            <span className={style.description}>{`<Button size='lg' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='primary' size='lg' />
            </span>
          </div>
        </div>
        <div className={style.colorButtons}>
          <div>
            <span
              className={style.description}
            >{`<Button color='default' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='default' />
            </span>
          </div>
          <div>
            <span
              className={style.description}
            >{`<Button color='primary' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='primary' />
            </span>
          </div>
          <div>
            <span
              className={style.description}
            >{`<Button color='secondary' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='secondary' />
            </span>
          </div>
          <div>
            <span
              className={style.description}
            >{`<Button color='danger' />`}</span>
            <span className={style.buttonContainer}>
              <Button text='Default' color='danger' />
            </span>
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        <p>Created by Sebatian Smuraglia</p>
      </footer>
    </div>
  );
};

export default App;
