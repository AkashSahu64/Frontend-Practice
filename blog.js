document.addEventListener("DOMContentLoaded", function() {
    // Simulated data for blogs
    var blogData = [
        {
            title: "Tech Blogs",
            subSegments: [
                "Web Development",
                "Data Science",
                "Artificial Intelligence",
                "Mobile App Development",
                "UI/UX Design"
            ]
        },
        {
            title: "Lifestyle Blogs",
            subSegments: [
                "Travel",
                "Food and Cooking",
                "Fashion and Beauty",
                "Health and Wellness",
                "Home Decor",
                "Personal Development",
                "Parenting"
            ]
        },
        {
            title: "Business Blogs",
            subSegments: [
                "Entrepreneurship",
                "Marketing",
                "Finance",
                "Leadership",
                "Startups",
                "Management"
            ]
        }
    ];

    // Simulated data for news feed
    var newsFeedData = {};
    blogData.forEach(function(blog) {
        newsFeedData[blog.title] = [
            blog.title + " News 1",
            blog.title + " News 2",
            blog.title + " News 3"
        ];
    });

    // Simulated data for upcoming events
    var upcomingEventsData = {};
    blogData.forEach(function(blog) {
        upcomingEventsData[blog.title] = [
            blog.title + " Event 1",
            blog.title + " Event 2",
            blog.title + " Event 3"
        ];
    });

    // Simulated data for jobs
    var jobsData = {};
    blogData.forEach(function(blog) {
        jobsData[blog.title] = [
            blog.title + " Job 1",
            blog.title + " Job 2",
            blog.title + " Job 3"
        ];
    });

    // Populate blogs section
    var blogsElement = document.querySelector("section:first-of-type");
    blogData.forEach(function(item) {
        var blogDiv = document.createElement("div");
        blogDiv.classList.add("sub-section");

        var segmentHeading = document.createElement("h3");
        segmentHeading.textContent = item.title;
        blogDiv.appendChild(segmentHeading);

        var subSegmentList = document.createElement("ul");
        item.subSegments.forEach(function(subSegment) {
            var subSegmentItem = document.createElement("li");
            subSegmentItem.textContent = subSegment;
            subSegmentList.appendChild(subSegmentItem);
        });

        blogDiv.appendChild(subSegmentList);
        blogsElement.appendChild(blogDiv);
    });

    // Populate news feed section
    var newsFeedElement = document.getElementById("newsFeed");
    var activeSegment = document.querySelector(".sub-section:first-of-type h3").textContent;
    newsFeedData[activeSegment].forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        newsFeedElement.appendChild(li);
    });

    // Populate upcoming events section
    var upcomingEventsElement = document.getElementById("upcomingEvents");
    upcomingEventsData[activeSegment].forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        upcomingEventsElement.appendChild(li);
    });

    // Populate jobs section
    var jobsElement = document.getElementById("jobs");
    jobsData[activeSegment].forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        jobsElement.appendChild(li);
    });

    // Add emoji to the header
    var emojiElement = document.createElement("span");
    emojiElement.textContent = "😊";
    emojiElement.classList.add("emoji");
    var header = document.querySelector("header");
    header.insertBefore(emojiElement, header.firstChild);
});
