# 🐾 PawPrint: Private Pet Health Records

**PawPrint** is a privacy-first decentralized application (dApp) built on the **Midnight Network**. It allows pet owners to securely store vaccination records and health data on-chain, enabling them to prove compliance to kennels, airlines, or border control without exposing the animal's entire medical history.

---

## 📖 Project Description
In the current digital age, sharing medical records often means handing over a full PDF containing sensitive information—owner addresses, vet names, and the pet's entire life history. 

**PawPrint** solves this using **Zero-Knowledge Proofs (ZKP)**. By leveraging Midnight’s "Compact" smart contract language, we separate the **proof of health** from the **private data**. You can prove your pet is "Fit to Fly" or "Vaccinated" without revealing a single unnecessary detail.

---

## 🚀 What it does
* **Secure Storage:** Stores pet vaccination status using Midnight’s privacy-preserving ledger.
* **Selective Disclosure:** Allows owners to generate a proof that a specific requirement (like a Rabies shot) is met.
* **Third-Party Verification:** Kennels or authorities can verify the proof instantly on the blockchain without needing access to a centralized database.

---

## ✨ Features
* **Data Sovereignty:** Pet owners own their data; Vets act as authorized "notaries" for the records.
* **ZK-Privacy:** Powered by Midnight's dual-state engine (Public + Private state).
* **Lightweight & Fast:** Built with `Compact`, ensuring minimal gas fees and high-speed verification.
* **Travel Ready:** Designed to meet the standards for digital pet passports.

---

## 🛠️ Tech Stack
* **Blockchain:** [Midnight Network](https://midnight.network/)
* **Language:** Compact (v0.20+)
* **Themes:** Privacy, ZK-Snarks, Pet-Tech

---

## 📜 Deployed Smart Contract
> **Note:** Replace the placeholder below with your actual contract address once deployed via the Midnight CLI or Lace wallet.

| Network | Contract Address |
| :--- | :--- |
| **Midnight Testnet** | `0x0000000000000000000000000000000000000000` |

---

## 🛠️ Getting Started (For Developers)

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/your-username/pawprint-midnight.git](https://github.com/your-username/pawprint-midnight.git)
    ```
2.  **Install Dependencies:**
    Ensure you have the [Midnight SDK](https://docs.midnight.network) installed.
3.  **Compile the Contract:**
    ```bash
    compact compile contract/pet_health.compact
    ```

---

## 🤝 Contributing
Contributions are welcome! If you have ideas for adding Microchip ID integration or multi-vet signatures, feel free to open an issue or a PR.

---
*Created for the Midnight Kolkata Bootcamp 2025*