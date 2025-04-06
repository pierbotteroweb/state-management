# NgRx Counter App (Modular)

This project is a **modular Angular app** using **NgRx Store for state management**, based on the official [NgRx Store Guide](https://ngrx.io/guide/store). It's designed to demonstrate best practices in state management using Angular modules instead of standalone components.

---

## 🧠 What You'll Learn

### 🧩 State Management with NgRx
NgRx helps manage the application state in a predictable way using:

- **Actions** – Think of actions like little post-it notes saying “Hey! Something happened!”
- **Reducer** – The person who reads the post-it notes and updates the whiteboard accordingly, but never changes the old board—only creates a new one with changes.
- **Selectors** – A smart assistant that helps you read the info from the whiteboard exactly how you want it.

➡️ You’ll find examples of all these concepts in the `src/app/counter/state/` folder:
- Actions: `counter.actions.ts`
- Reducer: `counter.reducer.ts`
- Selector: `counter.selectors.ts`

---

### 📦 Modular Angular Setup
This app follows the **modular architecture** (not standalone). Think of it like organizing your house by rooms. Instead of throwing everything in one giant drawer, we made a special "Counter Room" (the `CounterModule`) that has its own tools, logic, and furniture.

➡️ Look at `src/app/counter/counter.module.ts` to see how the counter feature is neatly packed into its own module and connected to the NgRx Store.

---

### 🔄 Connecting the Store to the UI
The `CounterComponent` uses:

- The `Store` service to **dispatch actions** – like sending post-its to the whiteboard manager (reducer).
- The `select` method to **read the current value** from the whiteboard (store).

➡️ In `counter.component.ts`, this line is key:
```ts
count$ = this.store.select(selectCounterValue);
```

### For Dummies Analogy:
- Imagine your app’s **state** is like a big whiteboard in the kitchen.
- **Actions** are sticky notes you use to tell someone to change something on the whiteboard.
- The **Reducer** reads those sticky notes and updates the whiteboard.
- **Selectors** are like *binoculars* that help you zoom in on the exact part of the whiteboard you want to see.
- `count$` is like a little TV that’s always tuned in to show you that specific number.

### Behind the Scenes:
1. The `CounterState` is registered using `StoreModule.forFeature('counter', counterReducer)` inside `counter.module.ts`.  
2. The `selectCounterState` gets the `'counter'` state:
```ts
export const selectCounterState = createFeatureSelector<CounterState>('counter');
```
3. Then `selectCounterValue` grabs the specific `counter` number:
```ts
export const selectCounterValue = createSelector(
  selectCounterState,
  (state: CounterState) => state.counter
);
```
4. Finally, the component listens to it with:
```ts
count$ = this.store.select(selectCounterValue);
```
5. This observable is displayed in the HTML:
```html
<h2>Current Count: {{ count$ | async }}</h2>
```

➡️ See `counter.selectors.ts` and `counter.component.ts/html` for the full picture.

---

### 🏗️ Root App Integration
In the `AppModule`, the root store is created using `StoreModule.forRoot({})`, and then each feature module like the counter is registered using `StoreModule.forFeature()`.

➡️ Check:
- Root setup: `app.module.ts`
- Root component display: `app.component.ts` and `app.component.html`

---

## 📁 Project Structure
```
src/app/
├── counter/
│   ├── counter.component.ts       # Displays UI and dispatches actions
│   ├── counter.component.html     # Template with buttons and observable display
│   ├── counter.module.ts          # NgModule with feature store
│   └── state/
│       ├── counter.actions.ts     # Defines counter actions
│       ├── counter.reducer.ts     # Reducer logic
│       └── counter.selectors.ts   # Selector to retrieve counter value
├── app.module.ts                  # Root module
├── app.component.ts              # Root component
└── app.component.html            # Root component template
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/ngrx-counter-app.git
cd ngrx-counter-app
npm install
ng serve
```

Visit `http://localhost:4200` to see the app in action.

---

## 📚 Learn More
- [NgRx Store Documentation](https://ngrx.io/guide/store)
- [Angular Modules](https://angular.io/guide/ngmodules)
- [Angular CLI](https://angular.io/cli)

---

## 🤖 Powered by ChatGPT  
This project includes insights and suggestions generated with the help of [ChatGPT](https://chatgpt.com/c/67f03d1e-978c-8002-82cc-77f66f43f69a).  