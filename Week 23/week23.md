### What is WebRTC?

**WebRTC** (Web Real-Time Communication) is a **set of protocols and APIs** that enable **peer-to-peer (P2P) communication** between devices. It allows for real-time audio, video, and data sharing directly between browsers or devices without needing an intermediary server for media transport. This technology powers communication apps like Zoom, Google Meet, and many more. 

1. **WebRTC as a Protocol**:
   - **WebRTC** isn't just one protocol; it is a suite of protocols that allow for real-time peer-to-peer communication. It works over the internet and is primarily used for video and voice calls, file sharing, and even remote desktop sharing.
   - The main protocols WebRTC uses include **RTP** (Real-Time Protocol) for media transport, **STUN** and **TURN** for network traversal, and **ICE** (Interactive Connectivity Establishment) to handle peer-to-peer connections.

2. **P2P (Peer-to-Peer) Communication**:
   - WebRTC enables **peer-to-peer communication** between devices (e.g., browsers or mobile devices), meaning the devices communicate directly with each other. The media (audio, video, etc.) flows directly between the two devices without the need for a central server to handle the media data.
   - **P2P** allows for more efficient, faster, and lower-latency communication compared to traditional client-server architectures.

3. **Signaling Server**:
   - **Signaling** is the initial process that sets up the WebRTC communication. This process is **not part of WebRTC itself**, but is necessary for the peers to discover each other, exchange metadata, and establish a connection.
   - The signaling server is responsible for exchanging information like:
     - Network information (like IP address and port)
     - Media capabilities (what types of media are supported, codec information, etc.)
     - Session control (such as establishing, modifying, or terminating calls)
   - Common protocols used for signaling include **WebSockets**, **HTTP**, or **SIP** (Session Initiation Protocol).
   
4. **STUN (Session Traversal Utilities for NAT)**:
   - **STUN** is used to help WebRTC peers discover their **public IP address** and port. Since most devices are behind a **NAT** (Network Address Translator), which hides their local private IP addresses, STUN helps them figure out how to communicate through the NAT.
   - When a peer wants to establish a connection, it first queries a STUN server to determine its external (public) IP address and port.
   
5. **TURN (Traversal Using Relays around NAT)**:
   - **TURN** is another protocol that comes into play when a direct P2P connection cannot be established (e.g., when strict firewalls or NATs block the connection). In such cases, a TURN server relays the media traffic between the peers.
   - TURN is more bandwidth-intensive than STUN because it involves the media traffic passing through a central server, but it is a fallback mechanism when P2P is not feasible.

### How WebRTC Communication Works:

1. **Connection Initiation**:
   - The process begins when one peer (e.g., a user in a browser) wants to establish a call or session. They first connect to the **signaling server**.
   - The signaling server facilitates the exchange of essential information like the user’s media capabilities, NAT traversal information, and session control messages.
   
2. **ICE Candidate Gathering**:
   - WebRTC uses **ICE** (Interactive Connectivity Establishment) to gather all potential network routes between the peers.
   - The browser will try to get the local network's **IP addresses** (using STUN or TURN), and share that information with the other peer through the signaling server.
   - This process helps both peers find the best possible route for communication, and if direct P2P isn't possible, it can fallback to TURN.

3. **Session Negotiation**:
   - Once both peers have gathered all network candidates, they will **negotiate** the connection.
   - This includes exchanging information about which **codecs** and **media formats** are supported, and the **network information** that will allow the peers to communicate.
   
4. **Direct Peer-to-Peer Connection**:
   - After the ICE negotiation, a direct connection between the peers is established.
   - Media (audio, video, or data) can now be transmitted directly from one peer to the other without any intermediate server (except when using TURN for fallback).

5. **Media Streaming**:
   - Once the connection is established, WebRTC supports **streaming** of audio, video, and data in real time.
   - WebRTC can stream **audio** and **video** using codecs like **Opus** (for audio) and **VP8/VP9** or **H.264** (for video).
   
6. **Connection Termination**:
   - When the communication is finished, either peer can send a termination message through the signaling server to end the session.
   - This typically involves closing the media streams and freeing up resources.

### Example Use Cases:
- **Zoom / Google Meet**: These apps use WebRTC for video calls. While these apps might use a signaling server to manage connections, the media (video/audio) is transmitted directly between users using WebRTC’s P2P protocols.
- **File Transfer**: WebRTC supports **Data Channels**, allowing peers to exchange arbitrary data (e.g., files) directly between browsers or devices.
- **Online Gaming**: Many multiplayer online games use WebRTC for low-latency communication between players.

### Summary:
- **WebRTC** enables **real-time, peer-to-peer communication** using protocols like **STUN**, **TURN**, and **ICE**.
- The **signaling server** is used to handle connection setup and negotiation, but media (like video and audio) can be sent directly between peers once the connection is established.
- It is widely used in apps like **Zoom**, **Google Meet**, and other real-time communication services.


# What is SDP?

**SDP** stands for **Session Description Protocol**. It’s like a **"language"** used by devices (like web browsers or apps) to talk to each other and agree on how they’ll communicate. In WebRTC (used for video calls, audio calls, etc.), SDP helps devices decide the following:

- What type of media (audio, video, data) will be shared.
- Which **codecs** (formats) will be used to send audio or video.
- The **IP addresses** and **ports** that will be used to send and receive media.

### Think of SDP as a Conversation Starter

Imagine you want to make a video call with a friend. Here's how it works with SDP:

1. **You Send an Offer (Starting the Call)**:
   - You tell your friend: "Hey, I want to talk to you on video, and I can use this format for audio and that format for video."
   - This "offer" is your SDP, which includes things like what codecs you support and where you are (your IP address and port).

2. **Your Friend Responds (Accepting or Modifying)**:
   - Your friend gets the offer and says, "Sure! I can do video in that format, and here’s my IP address and port."
   - This response is your friend's SDP "answer," which tells you how they can communicate.

3. **You Now Know How to Talk**:
   - With the information exchanged via SDP, both of you now know exactly how to connect and communicate with each other.


1. **Media Type**: Audio, video, or data.
2. **Codecs**: The format to use (like MP3 for audio, or H.264 for video).
3. **IP Address & Port**: Where to send the media.
4. **Direction**: Whether you can **send** or **receive** media (e.g., can you hear their voice, can they see you?).

### Example (Super Simple SDP):

Imagine you’re sending an SDP offer to your friend for a video call. It could look like this (but much simpler):

```
I want to send audio and video.
Here’s my IP address and port.
I can use audio codec 0 (like MP3) and video codec 96 (like H.264).
```

Your friend’s answer might look like this:

```
I can receive audio and video too.
 Here’s my IP address and port.
  I can use audio codec 0 and video codec 96.
```

Now, both of you know how to talk to each other.

### Summary:

- **SDP** is a way for devices to agree on how to communicate (e.g., what kind of media, codecs, and network settings).
- It is exchanged between devices in WebRTC when setting up a video call or data transfer.
